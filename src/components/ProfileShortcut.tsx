import { Spinner } from "flowbite-react";
import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router";

interface ProfileShortcutProps {
  firstName: string;
  lastName: string;
  className?: string;
  img?: string;
  alt: string;
}

const ProfileShortcut = ({
  firstName,
  lastName,
  className,
  img,
  alt,
}: ProfileShortcutProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const maxRetries = 3;

  const getInitials = () => {
    const firstInitial = firstName?.charAt(0)?.toUpperCase() || "";
    const lastInitial = lastName?.charAt(0)?.toUpperCase() || "";
    return `${firstInitial}${lastInitial}` || "NN";
  };

  const fetchImage = async (
    imageUrl: string,
    attempt: number = 1
  ): Promise<boolean> => {
    return new Promise((resolve) => {
      const image = new Image();

      image.onload = () => {
        resolve(true);
      };

      image.onerror = () => {
        console.warn(
          `Image fetch attempt ${attempt} failed for URL: ${imageUrl}`
        );
        resolve(false);
      };

      const timeoutId = setTimeout(() => {
        console.warn(
          `Image fetch attempt ${attempt} timed out for URL: ${imageUrl}`
        );
        resolve(false);
      }, 5000);

      image.onload = () => {
        clearTimeout(timeoutId);
        resolve(true);
      };

      image.onerror = () => {
        clearTimeout(timeoutId);
        console.warn(
          `Image fetch attempt ${attempt} failed for URL: ${imageUrl}`
        );
        resolve(false);
      };

      image.src = imageUrl;
    });
  };

  const attemptImageLoad = useCallback(
    async (imageUrl: string) => {
      setIsLoading(true);
      setIsImageLoaded(false);

      for (let attempt = 1; attempt <= maxRetries; attempt++) {
        const success = await fetchImage(imageUrl, attempt);

        if (success) {
          setIsImageLoaded(true);
          setIsLoading(false);
          return;
        }

        if (attempt < maxRetries) {
          await new Promise((resolve) =>
            setTimeout(resolve, Math.pow(2, attempt - 1) * 1000)
          );
        }
      }

      console.error(
        `Failed to load image after ${maxRetries} attempts: ${imageUrl}`
      );
      setIsImageLoaded(false);
      setIsLoading(false);
    },
    [maxRetries]
  );

  useEffect(() => {
    if (img && img.trim()) {
      attemptImageLoad(img);
    } else {
      setIsImageLoaded(false);
      setIsLoading(false);
    }
  }, [img, attemptImageLoad]);

  return (
    <Link
      to="/profile"
      className="bg-gray-300 rounded-lg flex gap-3 w-auto h-auto p-2 hover:bg-gray-400/60 hover:cursor-pointer transition-all duration-100 ease-in-out"
    >
      {isImageLoaded ? (
        <div className="rounded-lg bg-[#023E8A] w-10 h-10 flex items-center justify-center text-white overflow-hidden">
          <img
            src={img}
            alt={alt}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      ) : (
        <div className="rounded-lg bg-[#023E8A] w-10 h-10 flex items-center justify-center text-white">
          {getInitials()}
        </div>
      )}

      {isLoading && <Spinner aria-label="Loading..." />}

      <div className="flex flex-col justify-start items-start mr-6">
        <div className="flex gap-2">
          <p className="font-medium">{`${firstName} ${lastName}`}</p>
        </div>
        <p className="text-xs text-gray-500">
          {className ?? "Tidak ada kelas"}
        </p>
      </div>
    </Link>
  );
};

export default ProfileShortcut;

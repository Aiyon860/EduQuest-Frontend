import React, { useRef, useEffect, useState } from 'react';
import * as blazeface from '@tensorflow-models/blazeface';
import '@tensorflow/tfjs';
import Warning from '../../components/Warning';

const FaceDetection: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [model, setModel] = useState<blazeface.BlazeFaceModel | null>(null);
    const [showWarning, setShowWarning] = useState(false);

    useEffect(() => {
        const loadModel = async () => {
            const loadedModel = await blazeface.load();
            setModel(loadedModel);
        };

        loadModel();
    }, []);

    useEffect(() => {
        if (window.location.pathname === '/soal/pilgan' || window.location.pathname === '/soal/isian') {
            startCamera();
        }
    }, [model]);

    const startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                videoRef.current.play();
            }
            detectFace();
        } catch (err) {
            console.error('Gagal mengakses kamera:', err);
        }
    };

    const detectFace = async () => {
        if (!model || !videoRef.current) return;

        const video = videoRef.current;

        const detect = async () => {
            if (video.readyState === 4) {
                const predictions = await model.estimateFaces(video, false);

                if (predictions.length >= 2 && !showWarning) {
                    setShowWarning(true);

                    const stream = video.srcObject as MediaStream;
                    stream?.getTracks().forEach((track) => track.stop());
                }
            }

            requestAnimationFrame(detect);
        };

        detect();
    };

    return (
        <div>
            <video ref={videoRef} style={{ display: 'none' }} autoPlay muted />
            {showWarning && <Warning />}
        </div>
    );
};

export default FaceDetection;

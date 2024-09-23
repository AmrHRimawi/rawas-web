"use client";
import {Canvas, useLoader} from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei';
import {useEffect, useRef, useState} from 'react';
import * as THREE from 'three';
import {TextureLoader} from 'three';

interface PanoramaViewerProps {
    imageUrl: string;
}

const PanoramaViewer: React.FC<PanoramaViewerProps> = ({imageUrl}) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const texture = useLoader(TextureLoader, imageUrl);
    const meshRef = useRef<THREE.Mesh>(null);

    if (!isClient) {
        return null;
    }

    return (
        <Canvas>
            <mesh ref={meshRef}>
                <sphereGeometry args={[500, 60, 40]}/>
                <meshBasicMaterial map={texture} side={THREE.DoubleSide}/>
            </mesh>
            <OrbitControls/>
        </Canvas>
    );
};

export default PanoramaViewer;

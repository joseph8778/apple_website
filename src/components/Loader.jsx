import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import gsap from 'gsap';
import { Text } from '@react-three/drei';

function Model(props) {
  const { nodes, materials } = useGLTF('/models/siberian.glb');
  const modelRef = useRef(); 
  const textRef = useRef();

  useEffect(() => {
    if (textRef.current) {
      gsap.to(textRef.current.position, {
        y:-4,
        yoyo: true,
        repeat: -1,
        ease: "bounce.in",
        duration: .5,
      })
    }

    if (modelRef.current) {

      gsap.to(modelRef.current.rotation, {
        y: "+=6.28",  
        duration: 1.75,  
        repeat: -1, 
        ease: "linear",
      });
    }
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  

  return (
    <>
    <group {...props} dispose={null} scale={[0.2, 0.2, 0.2]} >
      <mesh
      ref={modelRef}
        castShadow
        receiveShadow
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
        >
        </mesh>

          
      <Text
        ref={textRef}
        position={[0, -5, 1]}
        fontSize={1.5}
        color="white"
        anchorX='center'
        anchorY='middle'>
        Loading...
      </Text>
    </group>

          </>
  );
}

export default Model;

useGLTF.preload('/models/siberian.glb');

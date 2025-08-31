import * as THREE from "three";

console.log(THREE)
const canvas = document.querySelector('canvas.webgl')
// create first scene
// 1- scene
// 2- object
// 3- camera
// 4- renderer

// 1---------------SCENE
const scene = new THREE.Scene()

// 2----------OBJECT
// 2A-----Geometry
const geometry= new THREE.BoxGeometry(1,1,1)
//2B Material
const Material = new THREE.MeshBasicMaterial({color:'0xff0000'})
//2C create mesh using material and geometry
const mesh = new THREE.Mesh(geometry,Material);
//2D add Mesh into the scene
scene.add(mesh)

// 3-------------------Camera
//3A create size for FOV (field of view) 
const size ={width:800, height:600}
const camera = new THREE.PerspectiveCamera(75, size.width/size.height)
camera.position.z= 3
scene.add(camera);

//4----------renderer

const renderer = new THREE.WebGLRenderer({canvas:canvas})

renderer.setSize(size.width, size.height);
renderer.render(scene,camera)
import * as THREE from './node_modules/three/build/three.module.js'
import './MeshRaycastRewrite.js'
import TriangleBoundsTree from './TriangleBoundsTree.js'

THREE.Geometry.prototype.computeBoundsTree = function() {
    this.boundsTree = new TriangleBoundsTree(this);
}

THREE.Geometry.prototype.disposeBoundsTree = function() {
    this.boundsTree = null;
}

THREE.BufferGeometry.prototype.computeBoundsTree = function() {
    this.boundsTree = new TriangleBoundsTree(this);
}

THREE.BufferGeometry.prototype.disposeBoundsTree = function() {
    this.boundsTree = null;
}
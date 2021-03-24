/**
 * Import crypto-js/SHA256 library
 */
const SHA256 = require('crypto-js/sha256');

/**
 * Class with a constructor for block 
 */
class Block {

	constructor(data){
		this.id = 0;
        this.nonce = 144444;
      	this.body = data;
      	this.hash = "";
    }
    
    /**
     * Step 1. Implement `generateHash()`
     * method that return the `self` block with the hash.
     * 
     * Create a Promise that resolve with `self` after you create 
     * the hash of the object and assigned to the hash property `self.hash = ...`
     */
  	// 
  	generateHash() {
        //Implement your code here
		const objStr = JSON.stringify(this)
		const hash = SHA256(objStr)
		this.hash = hash
        return Promise.resolve(this)
    }
}

// Exporting the class Block to be reuse in other files
module.exports = { Block };
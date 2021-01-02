import {DataTexture, UnsignedShort4444Type} from "three";

/**
 * Stores the raw depth values in a 16 bit value packed texture.
 *
 * The distance to the camera is stored in millimeters.
 */
export class DepthDataTexture extends DataTexture
{
	constructor(width, height) {
		const size = width * height;
		const data = new Unit16Array(size);

		super(data, width, height, UnsignedShort4444Type);
	}

	updateDepth(depth)
	{

	}

}

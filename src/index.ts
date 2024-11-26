// 1. Go to https://cloudinary.com
// 2. Click 'Sign Up For Free'
// 3. Click 'Sign Up With Email'
// 4. Show the media library
// 5. Open up the URL (https://res.cloudinary.com/bradgarropy/image/upload/cloudinary-conversion-demo/austin)
// 6. Transform it to WebP (https://res.cloudinary.com/bradgarropy/image/upload/f_webp/cloudinary-conversion-demo/austin)

import {v2 as cloudinary} from "cloudinary"
import "dotenv/config"

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
})

const url = cloudinary.url("cloudinary-conversion-demo/austin", {
    // fetch_format: "webp",
})

console.log(url)

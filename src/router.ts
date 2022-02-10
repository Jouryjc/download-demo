import express, { Request, Response } from 'express'
import path from 'path'
import fs from 'fs'

export const router = express.Router()

router.use('/download', (req: Request, res: Response) => {

	const file = fs.createReadStream(path.resolve(process.cwd(), './public/test.zip'))

	file.on("data", chunk => {
		res.write(chunk);
	})
	file.on("end", () => {
		res.status(200);
		res.end();
	})
})


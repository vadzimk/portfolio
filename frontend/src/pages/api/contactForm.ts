// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {getHomepageData} from '@/services/cmsDataService';

type Data = {
    name: string
}

/*
    /api/contactForm
*/
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const body = req.body
    const homepageData = await getHomepageData()
    res.status(200).json({homepageData: homepageData})
}

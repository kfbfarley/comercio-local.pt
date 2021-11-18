import prisma from '../../lib/client'

export default async function register(request, response) {
    if (request.method === 'POST') {
        const body = request.body as Request

        try {
            const exists = await findByNif(body.nif)
            if (exists) {
                return response.status(200).json({
                    result: false,
                    exists: true,
                    merchant: null
                })
            } else {
                const merchant = await create({
                    nif: body.nif,
                    social: body.social,
                    email: body.email
                })
                return response.status(200).json({
                    result: true,
                    exists: false,
                    merchant: merchant
                })
            }
        } catch (error) {
            response.status(error).json({ result: false, merchant: null })
        }
    }
}

interface Merchant {
    merchant_id: number
    merchant_name: string
    merchant_brand_name: string
    merchant_social_name: string
    city: string
    merchant_nif: number
    email: string
    phone: string
    password?: string
}
interface Request {
    nif: number
    social: string
    email: string
}
const findByNif = async (nif: number) => {
    return prisma.merchant
        .findFirst({
            where: {
                merchant_nif: nif
            }
        })
        .then((merchant: Merchant) => {
            return merchant ? true : false
        })
}
const create = async (merchant: Request) => {
    return prisma.merchant
        .create({
            data: {
                merchant_nif: merchant.nif,
                merchant_social_name: merchant.social,
                email: merchant.email
            }
        })
        .then((merchant: Merchant) => {
            delete merchant.password
            return merchant
        })
}

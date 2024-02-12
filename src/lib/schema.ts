import { z } from 'zod'



export const Transaction = z
    .object({
        product : z.array(
            z.object({
                pName : z.string(),
                pQuantity : z.number(),
                pExpiration : z.date()
            })
        ),
        cName : z.string(),
        cContact : z.string(),
        cAddress : z.string(),
        cRep : z.string(),

        oName : z.string(),
        oContact : z.string(),
        oAddress : z.string(),
        oRep : z.string()

    })

type ITransaction = z.infer<typeof Transaction>;



export const userSchema = z
    .object({
        userTypeName : z.string(),
        userAddress : z.string(),
        userContact : z.string(),
        userRep : z.string(),
        userRole : z.enum(["admin" || "company" || "organization"]),
        userEmail : z.string().email(),
        userPass : z.string()
    })

export type userData = z.infer<typeof userSchema>



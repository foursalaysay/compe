import { z } from 'zod'


export const CDonation = z
.object({
    donationId : z.string(),
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
    })

export type ICDonation = z.infer<typeof CDonation>


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



export const userSchema = z.object({
    userTypeName: z.string(),
    userAddress: z.string(),
    userContact: z.string(),
    userRep: z.string(),
    userRole: z.enum(["admin", "company", "organization"]),
    userEmail: z.string().email(),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type userData = z.infer<typeof userSchema>



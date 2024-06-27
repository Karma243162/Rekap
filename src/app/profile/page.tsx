"use client"

import Nav from '@/components/Nav/nav'
import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

function Profil() {
    const user = {
        name: "mohammed",
        email: "mohammed.tahri24@gmail.com",
        professionalAccount: true,
        phone: "0606060606",
        adresse: "20 rue des rues, Arras 62790",
        society: "REKAP&Co",
        employe: [
            { id: 1, fistName: 'john', name: "Doe", email: "johnDoe@gmail.com" },
            { id: 2, fistName: 'jonny', name: "Poe", email: "jonnyPoe@gmail.com" },
            { id: 3, fistName: 'Emma', name: "Zoe", email: "EmmaZoe@gmail.com" }
        ]
    }
    return (
        <div>
            <Nav />
            <div className="bg-white overflow-hidden shadow rounded-lg border">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                        {user.professionalAccount === true ? <p>Profile
                            <span className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 m-2 dark:text-purple-300">PRO</span>
                        </p> : <p>Profile<br />
                            <span className='hover:underline cursor-pointer text-[15px] '> passer en compte pro</span>
                        </p>}
                    </h3>


                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                    <dl className="sm:divide-y sm:divide-gray-200">
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Full name
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {user.name}
                            </dd>
                        </div>
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Email address
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {user.email}
                            </dd>
                        </div>
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Phone number
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {user.phone}
                            </dd>
                        </div>
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Address
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {user.adresse}
                            </dd>
                        </div>



                        {user.professionalAccount &&
                            <>
                                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">
                                        Your Society
                                    </dt>
                                    <dd className="mt-1 text-sm flex text-gray-900 sm:mt-0 sm:col-span-2">
                                        <p> {user.society}</p>

                                        <AlertDialog>
                                            <AlertDialogTrigger><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 ml-3">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z" />
                                            </svg>
                                            </AlertDialogTrigger>
                                            <AlertDialogContent>
                                                <AlertDialogHeader>
                                                    <AlertDialogTitle>Etes vous sur de quitté la societé <span className='underline'>{user.society}</span> ?</AlertDialogTitle>
                                                    <AlertDialogDescription>
                                                        Cette action ne peut pas être annulée. Cela supprimera définitivement votre Société actuelle.

                                                    </AlertDialogDescription>
                                                </AlertDialogHeader>
                                                <AlertDialogFooter>
                                                    <AlertDialogCancel>Annuler</AlertDialogCancel>
                                                    <AlertDialogAction>Supprimer quand même</AlertDialogAction>
                                                </AlertDialogFooter>
                                            </AlertDialogContent>
                                        </AlertDialog>
                                    </dd>
                                </div>
                                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">
                                        Employée
                                    </dt>
                                    <dd className="mt-1 text-sm flex text-gray-900 sm:mt-0 sm:col-span-2">
                                    {user.employe.length}
                                    <Sheet>


                                        <SheetTrigger>  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 ml-2 cursor-pointer">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg></SheetTrigger>
                                        <SheetContent>
                                            <SheetHeader>
                                                <SheetTitle>Liste de mes employées </SheetTitle>
                                                <SheetDescription>
                                                    Certaines actions peuvent modifier le status de vos employées..
                                                </SheetDescription>
                                                {user.employe.map((group) => (
                                                    <ul className='flex' key={group.id}>
                                                        <li className='border-b-2 text-center'>{group.fistName} {group.name} / {group.email}</li>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 m-1 cursor-pointer">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                                                        </svg>

                                                    </ul>
                                                ))}
                                            </SheetHeader>
                                        </SheetContent>
                                    </Sheet>
                                </dd>

                            </div>




                            <div className='flex w-full flex-wrap justify-around'>
                                <Card className='w-[200px]'>
                                    <CardHeader className="pb-2">
                                        <CardDescription>Contrat Signé </CardDescription>
                                        <CardTitle className="text-4xl">56</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-xs text-muted-foreground">Total de contrat signé par la société {user.society}</div>
                                    </CardContent>
                                    <CardFooter>
                                        <Progress value={25} aria-label="25% increase" />
                                    </CardFooter>
                                </Card>

                                <Card className='w-[200px]'>
                                    <CardHeader className="pb-2">
                                        <CardDescription>Facture </CardDescription>
                                        <CardTitle className="text-4xl">99</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-xs text-muted-foreground">la socitété {user.society} à 99 facture </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Progress value={50} aria-label="25% increase" />
                                        <p>20 000€</p>
                                    </CardFooter>
                                </Card>

                                <Card className='w-[200px]'>
                                    <CardHeader className="pb-2">
                                        <CardDescription>Total Facture </CardDescription>
                                        <CardTitle className="text-4xl">18 658 €</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-xs text-muted-foreground">Vous avez généré 18 658 € avec vote société</div>
                                    </CardContent>
                                    <CardFooter>
                                        <Progress value={80} aria-label="25% increase" />

                                    </CardFooter>

                                </Card>
                            </div>
                            </>
                        }


                    </dl>
                </div>
            </div>
        </div>
    )
}

export default Profil
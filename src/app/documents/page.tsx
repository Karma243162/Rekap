"use client"

import React, { useEffect, useState } from 'react';
import Cardoc, { AddCard } from '@/components/docs/Cardoc';
import Nav from '@/components/Nav/nav';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

function Documents() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;

    const docData = [
        { id: 1, title: "CONTRAT N°54646541 Carist", transmitter: "addecco" },
        { id: 2, title: "CONTRAT N°546541 - Preparateur de Commande", transmitter: "Partnaire" },
        { id: 3, title: "CONTRAT N°54674646541 Carist caces - 6", transmitter: "Crit" },
    ];

    return (
        <div>
            <Nav />

            <div className='bg-blue-200 bg-opacity-30 w-[90%] justify-center m-auto mt-12 rounded p-5'>
                <h1 className='uppercase'>Mes documents : </h1>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Tout" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="All">Tout</SelectItem>
                        {docData.map((data) => (
                            <SelectItem key={data.id} value={data.transmitter}>
                                {data.transmitter}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <div className='mt-5'>
                    <ul className='flex flex-wrap justify-around'>
                        {docData.map((data) => (
                            <Cardoc key={data.id} title={data.title} transmitter={data.transmitter} />
                        ))}
                        <AddCard />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Documents;

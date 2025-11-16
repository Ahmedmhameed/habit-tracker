import { Button } from '@/components/ui/button'
import { ArrowUpIcon } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
    return (
        <div className="mx-auto mt-40 flex max-w-4xl flex-col items-center justify-center gap-2">
            <h1 className="text-center text-2xl">This is a Habite Tracker</h1>
            <p className="text-sm">
                modern web application designed to help users build consistency,
                track progress, and cultivate positive habits while reducing
                negative ones. With an intuitive dashboard, smart reminders, and
                engaging visualizations, the platform makes personal growth both
                effective and enjoyable.
            </p>
            <Button
                size={'lg'}
                className="bg-red-500 transition duration-500 ease-in-out hover:bg-red-300"
            >
                Let&apos;s Go
            </Button>
            <Button variant="outline" size="icon" aria-label="Submit">
                <ArrowUpIcon />
            </Button>
        </div>
    )
}

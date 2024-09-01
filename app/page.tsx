import Image from "next/image";
import 'outstatic/outstatic.css'
import { Outstatic } from 'outstatic'
import { OstClient } from 'outstatic/client'

export default async function Home({ params }: { params: { ost: string[] } }) {
  const ostData = await Outstatic()
  return <OstClient ostData={ostData} params={params} />
}

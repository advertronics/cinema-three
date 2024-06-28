import React from "react"

import { useSearchParams } from "next/navigation"

import "./single-show.css"
import SingleShowShowcase from "@/app/(pages)/components/SingleShowShowcase"
import Trailer from "@/app/(pages)/components/Trailer"
import ShowDescription from "@/app/(pages)/components/ShowDescription"
import CallToActionButtons from "@/app/(pages)/components/CallToActionButtons"
import RelatedShows from "@/app/(pages)/components/RelatedShows"

type TSingleShow = {
  categoryName: string
  showId: string
}

const SingleShowPage = ({ params }: { params: TSingleShow }) => {
  const showId = params?.showId
  return (
    <>
      <SingleShowShowcase showId={showId} />
      <Trailer />
      <ShowDescription showId={showId} />
      <CallToActionButtons />
      <RelatedShows />
    </>
  )
}

export default SingleShowPage

/* eslint-disable no-unused-vars */
import React from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import { useState } from 'react'
import useFetch from '../../../hooks/UseFetch'
import Carousel from '../../../components/Carousel/Carousel'

function Trending() {

    const [endpoint, setEndpoint] = useState("day")

    const {data, loading} = useFetch(`/trending/all/${endpoint}`)

    const onTabChange = (tab)=> {
        setEndpoint(tab === "Day" ? "day": "week")
    };

    return (
        <div className='carouselSection'>
            <ContentWrapper>
                <span className="carouselTitle">
                    Trending
                </span>
                <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange}/>
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading}/>
        </div>
    )
}

export default Trending

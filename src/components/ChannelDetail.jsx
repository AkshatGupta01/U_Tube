import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { Box } from "@mui/material";
import { ChannelCard, Videos } from "./";

const ChannelDetail = () => {
    const { id } = useParams();
    const [channelDetail, setChannelDetail] = useState(null);
    const [videos, setVideos] = useState([]);

    console.log(videos);
    useEffect(() => {
        fetchFromAPI(`channels?part=snippet&id=${id}`)
            .then((data) => setChannelDetail(data?.items[0]));

        fetchFromAPI(`search?part=snippet&channelId=${id}&order=date`)
            .then((data) => setVideos(data?.items));

    }, [id]);

    return (
        <Box minHeight='95vh'>
            <Box
                sx={{
                    background: 'rgb(34,193,195)',
                    background: 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)',
                    zIndex: 10,
                    height: '300px'
                }}
            />
            <ChannelCard channelDetail={channelDetail} marginTop='-110px' />
            <Box display='flex' p='2'>
                <Box sx={{ mr: { sm: '100px' } }} />
                <Videos videos={videos} />
            </Box>

        </Box>


    )
}

export default ChannelDetail

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTvlist } from "../redux/actions/puneritv.action";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import Blockele from "./Block";
import Banner from "./Banner";



function TvList(){
    const dispatch = useDispatch();
    const { tvlist, loading } = useSelector((state) => state.puneritv);

    const seasonIds = [7, 6];

    const [seasons , setSeasons] = useState([]);
    const [allSeasonData, setAllSeasonData] = useState({});
    const [activeSeason, setActiveSeason] = useState(null);

    useEffect(() => {
        seasonIds.forEach((id) => 
            dispatch(fetchTvlist(id)));
    }, [])

    useEffect(() => {
        if(!Array.isArray(tvlist) || tvlist.length === 0) return;

        const seasonId = tvlist[0].id;
        const seasonName = tvlist[0].cat_name;

        setAllSeasonData((perv) => ({
            ...perv,
            [seasonId]: tvlist,
        }));

        setSeasons((perv) => {
            if (perv.some((s) => s.id === seasonId)) return perv;
            const updated = [...perv, {id: seasonId, name: seasonName }];
            updated.sort((a, b) => b.id - a.id);
            return updated;
        });
        setActiveSeason((prev) => (prev === null ? seasonId : prev));
  }, [tvlist]);

  const currentVideos = allSeasonData[activeSeason] || [];


  return (
    <>
    <Banner text={"Puneri TV"}/>

    <div className="p-4" style={{padding:"10px"}}>
        <div className="flex justify-center gap-4 my-4 ">
            {seasons.length > 0 && seasons.map((s) => (
                <button key={s.id} className={`p-5 rounded text-white tet-xl md:text-4xl uppercase cursor-pointer ${s.id === activeSeason ? "bg-orange-500" : "bg-gray-600"}`} 
                onClick={() => setActiveSeason(s.id)}
                style={{fontFamily:"extrabold",padding:"10px", marginBottom:"5px",transform:"skewX(-10deg)" }}>
                    {s.name}
                </button>
            ))}
        </div>
        <div className="flex flex-wrap justify-center text-center align-middle gap-4" style={{padding:"20px"}}>
            {loading && <Loading/>}

            {!loading && currentVideos.map((item) => (
                <Link to={`/puneritv/${item.id}`} key={item.id} className="p-2 w-full sm:w-[48%]">
                <img src={`https://img.youtube.com/vi/${item.url}/hqdefault.jpg`} alt="loading photo" className="w-full rounded" />
                <div className="h-2"></div>
                <div className="overflow-hidden">
                    <Blockele title={item.name} translate={16} width="w-full"/>
                </div>
                <div className="h-5"></div>
                </Link>
            ))}
        </div>
    </div>
    </>
  )
}

export default TvList;
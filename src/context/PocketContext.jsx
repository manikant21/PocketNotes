import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useStorage } from "./StorageContext";

const PocketContext = createContext();

const PocketContextProvider = ({ children }) => {

    const { get, set, remove, values } = useStorage();
    const [Groups, setGroups] = useState([]); //{ id:"1",name:"Java",color:"#00FF00"},{id:"2",name:"Python",color:"#800000"},{id:"3",name:"c++",color:"#00FF00"},{id:"4",name:"JS",color:"#00FF00", }]);
    useEffect(() => {
        const groups = JSON.parse(get('groups') || '[]');
        console.log(groups);
        setGroups((prev) => ([...prev, ...groups]));
    }, [])
    
    useEffect(() => {
        set('groups', JSON.stringify(Groups));
    }, [Groups, set]);

    

    const [message,setMessage]=useState([
        {id:"100",groupId:"1",message:"Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.",date:"23/01/2024",time:"22:03PM"},

        {id:"101",groupId:"2",message:"Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.",date:"23/01/2025",time:"22:03PM"},

        {id:"102",groupId:"3",message:"Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.",date:"23/09/2024",time:"22:03PM"},

        {id:"103",groupId:"4",message:"Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.",date:"23/01/2024",time:"22:03PM"},

        {id:"104",groupId:"1",message:"Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.",date:"23/01/2024",time:"22:03PM"},

        {id:"105",groupId:"2",message:"Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.",date:"23/01/2024",time:"22:03PM"},

        {id:"106",groupId:"2",message:"Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.",date:"29/01/2024",time:"22:03PM"},

        {id:"107",groupId:"3",message:"Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.",date:"23/01/2021",time:"22:03PM"}
    ]);
    
    useEffect(()=>{
        const mess=JSON.parse(get('mess') ||'[]');
        setMessage((prev)=>([...prev, ...mess]));
    
    },[]);
    useEffect(()=>{
        set('mess',JSON.stringify(message));
    },[message]);

    const [ colors, setColors ] =useState(["#B38BFA","#FF79F2","#43E6FC","#F19576","#0047FF","#6691FF"]);

    const ctxVal = useMemo(
      () => ({
        Groups,
        setGroups,
        message,
        setMessage,
        colors,
        setColors,
      }),
      [Groups, setGroups, setColors, colors, setMessage, message]
    );
    return (
        <PocketContext.Provider value={ctxVal}>
            { children }
        </PocketContext.Provider>
    )
        
};

const usePocket = () => {
    return useContext(PocketContext);
}

export { PocketContextProvider, usePocket };
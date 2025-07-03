type SongItem = {
title: string;
album:string;
artist:string;
} 
const SongInfo = ({title, album, artist,showEdit}:SongItem) => {

  return <div className="song flex" >
    <span>{title}</span>
    <span>{album}</span>
    <span>{artist}</span>
    {showEdit && <span> <button>Delete</button>
      </span>
    }
    </div>
}

export default function SongCollection({songs,canEdit}: {songs: Record<string, SongItem[]>, canEdit: boolean}) {

return <><div className='flex-column gap30'>
      <div className='flex collection-header'>
        <span className='flex-1'>Title</span>
        <span className='flex-1'>Album</span>
        <span className='flex-1'>Artist</span> 
        <span className='flex-1'>Actions</span>
      </div> 
      { Object.keys(songs).map(key=>{
            return <div className="yay">
               {songs[key].map((v)=><SongInfo key={v.rank} {...v} showEdit ={canEdit}/>)} 
            </div>
            })
      }
    </div></>;
    }
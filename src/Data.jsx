

const Data = ({item}) => {
    const {item_id,cover,author,travel_title,author_image,post_date,reading_time,hashtag} = item
    return (
        <div>
            <img className="rounded-lg" src={cover} alt="" />
            <h2>{item_id} {travel_title}</h2>
        </div>
        
    );
};

export default Data;
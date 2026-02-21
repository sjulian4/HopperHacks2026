import React from 'react';
// Make sure you have some styles in here for your cards!
// import '../stylesheets/homepage.css'; 

export default class Homepage extends React.Component { 
   handleClick = async(posts, title, order) =>{
    // placeholder for your sorting logic
    console.log(`Sorting ${title} by ${order}`);
   }

    render(){
        const postRows = [];
       
        // FILLING THE PLACEHOLDER: 
        // Looping through the food alerts and turning them into UI cards
        if (this.props.posts && this.props.posts.length > 0) {
            this.props.posts.forEach((post) => {
                postRows.push(
                    <li key={post.id || Math.random()} className="food-alert-card" style={{ listStyleType: "none", border: "1px solid tomato", padding: "15px", marginBottom: "10px", borderRadius: "8px" }}>
                        <h3 style={{ margin: "0 0 10px 0" }}>{post.food} 🍕</h3>
                        <p style={{ margin: "5px 0" }}><strong>📍 Where:</strong> {post.location}</p>
                        <p style={{ margin: "5px 0", color: "gray" }}><strong>⏰ Posted:</strong> {post.timePosted}</p>
                    </li>
                );
            });
        } else {
            postRows.push(<li key="empty" style={{ listStyleType: "none" }}>No food alerts right now! Check back later.</li>);
        }

        let theCommunity;
        console.log("LOOP STARTING")
        console.log("@Commpage this.props", this.props);

        // Making sure model and communities exist before looping to prevent crashes
        if (this.props.model && this.props.model.communities) {
            for(let i = 0; i < this.props.model.communities.length; i++){
                if(this.props.model.communities[i].name === this.props.title){
                    theCommunity = this.props.model.communities[i];
                    console.log("MATCH");
                }
            }
        }
        
        console.log("community for loop ends");

        // Safety check: If the community wasn't found, render a fallback
        if (!theCommunity) {
            return <div>Loading Community...</div>;
        }

        return(
        <div className="page">
            <div className="top">
                <div style={{display: "flex", alignItems: "center", gap: "10px", paddingBottom: "10px"}}>
                    <h1 style={{color:"tomato",textAlign:"left", margin: 0}}>{this.props.title}</h1>
                    <button type="button" id="newest"  onClick={()=>this.handleClick(this.props.posts,this.props.title,"newest")} >Newest</button>
                    <button type="button" id="oldest" onClick={()=>this.handleClick(this.props.posts,this.props.title,"oldest")}>Oldest</button>
                    <button type="button" id="active" onClick={()=>this.handleClick(this.props.posts,this.props.title,"active")}>Active</button>
                </div>
            </div>
           
            <div style={{paddingLeft: "2%"}}>
              {/* Assuming contentJSX is a helper function you have defined elsewhere */}
              {/* <div id="commDescription">{contentJSX("comm", theCommunity.description)}</div> */}
              <div id="commDescription">{theCommunity.description}</div>
              
              {/* Assuming getTimestamp is defined elsewhere, using a fallback for now */}
              <pre style={{margin: "0",color: "gray"}}>Created {theCommunity.startDate || "Recently"}</pre>
              
              <div style={{display: "flex",paddingRight: "2%"}}>
                <pre style={{margin: "0", padding: "0",color: "gray"}}>{theCommunity.postIDs ? theCommunity.postIDs.length : 0} Posts</pre>
                <pre style={{margin: "0", marginLeft: "3%",padding: "0",color: "gray"}}>{theCommunity.members ? theCommunity.members.length : 0} Members</pre>
              </div>
            </div>
              
            <hr style={{padding: "0", margin: "20px 0"}}></hr>

            <div style={{marginLeft: "2%"}}>
                <ul style={{ padding: 0 }}>
                    {postRows}
                </ul>
            </div>
        </div>
        );
    }
}
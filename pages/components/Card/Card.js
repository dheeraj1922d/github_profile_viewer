import React, { useEffect , useState} from "react";
import style from "./Card.module.css";

const Card = ({ data }) => {
  const [repositories, setRepositories] = useState();
  useEffect(() => {
    fetch(data.repos_url)
      .then((response) => response.json())
      .then((repositories) => {
        // Sort repositories by number of stars in descending order
        repositories.sort((a, b) => b.stargazers_count - a.stargazers_count);

        // Get the top 3 repositories
        const popularRepositories = repositories.slice(0, 3);

        console.log("Popular Repositories:", popularRepositories);
        setRepositories(popularRepositories);
      });
  }, [data]);

  return (
    <>
      <div className={style.card}>
        <div>
          <img className={style.avatar} src={data.avatar_url}></img>
        </div>
        <div className={style.leftsection}>
          <a target="_blank" style={{ textDecoration: 'none' , color: 'white' }}  href={data.html_url}><h3 className={style.name}>{data.name}</h3></a>
          
          <h3 className={style.login}>{data.login}</h3>

          <p className={style.p}>{data.bio}</p>
          <h4 className={style.h4}>{data.location}</h4>
        </div>
        <div className={style.rightsection}>
          <div className={style.social}>
            <div>
              <span>{data.followers}</span>
              <span className={style.followers}>followers</span>
            </div>
            <div>
              <span>{data.following}</span>
              <span className={style.followers}>following</span>
            </div>
          </div>

          <div className={style.repoHeading}>Popular Repositories</div>
          {repositories &&
            repositories.map((repository, index) => (
              <div key={index} className={style.repoContainer}>
                <div>
                  <a target="_blank" style={{ textDecoration: 'none' }} href={repository.html_url}><h5 className={style.repoName}>{repository.name}</h5></a>
                  
                  <div className={style.repoDescription}>
                    {repository.description}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Card;

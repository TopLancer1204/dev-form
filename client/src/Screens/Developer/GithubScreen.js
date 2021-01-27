import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GithubScreen = ({ username }) => {
  const [gh, setGithubData] = useState({});

  useEffect(() => {
    const fetchGhData = async () => {
      const res = await axios.get(`https://api.github.com/users/${username}`);
      setGithubData(res.data);
    };
    if (username !== '') {
      fetchGhData();
    }
  }, [username]);
  console.log(gh)
  return (
    <div>
      {Object.keys(gh).length === 0 ? (
        'No Data'
      ) : (
        <div className='flex items-center'>
          <div className='w-48 h-48 '>
            <img className='rounded-full' alt={gh.login} src={gh.avatar_url} />
          </div>
          <div className='text-gray-600 ml-3'>
              <p className='text-xl font-semibold'>{gh.name}</p>
              <p className='text-sm'>@{gh.login}</p>
              <p className='italic'>{gh.bio}</p>
              <p className=''><i class="fas fa-map-marker-alt mr-2"></i>{gh.location}</p>
              <p><i class="fas fa-users mr-2"></i>{gh.followers} Followers, {gh.following} Following</p>              
              <p><i class="fas fa-code-branch mr-2"></i>{gh.public_repos} repos, {gh.public_gists} gists</p>              
              {gh.company !== '' && <p>{gh.company}</p>}
              {gh.email !== '' && <p>{gh.email}</p>}              
              {gh.blog !== '' && <p><i class="fas fa-globe mr-2"></i>{gh.blog}</p>}              
          </div>
        </div>
      )}
    </div>
  );
};

export default GithubScreen;

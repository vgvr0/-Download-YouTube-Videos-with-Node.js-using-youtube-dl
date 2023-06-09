const { exec } = require('child_process');

const videoUrl = 'https://www.youtube.com/watch?v=VIDEO_ID';

// Define the function to download the video
function downloadVideo(url) {
  const command = `youtube-dl -f 'bestvideo[ext=mp4]+bestaudio[ext=m4a]/mp4' --output 'video.mp4' ${url}`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error downloading the video: ${error.message}`);
      return;
    }
    console.log('Video downloaded successfully.');
  });
}

// Download the video
downloadVideo(videoUrl);

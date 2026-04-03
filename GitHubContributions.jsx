import { color } from 'framer-motion';
import React from 'react'
import { GitHubCalendar } from 'react-github-calendar';
import PortfolioStore from './useStore';

const GitHubContributions = () => {
  const blueTheme = {
    light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'], // Standard Light
    dark: [
      '#161b22', // Level 0: Very dark (almost black)
      '#00441b', // Level 1: Dark Forest
      '#006d2c', // Level 2: Medium Green
      '#238b45', // Level 3: Bright Leaf
      '#71eb8d'  // Level 4: Neon Mint (This will "glow" against the dark)
    ],
  };
  const theme = PortfolioStore((state) => state.theme);
  return (
    <div className='px-6'>
      <div className='font-bold text-gray-700 mb-4'>Github Contributions</div>

      <GitHubCalendar
        username="adinath302"
        theme={blueTheme}
        colorScheme={theme ? 'light' : 'dark'}      // <--- Forces dark mode text colors
        style={{ color: `${theme ? 'black' : 'white'}` }} // <--- Sets the text color to white
        showWeekdayLabels={false}
        blockSize={8}
        blockMargin={4}
        fontSize={12}
      />

    </div>
  )
}

export default GitHubContributions;
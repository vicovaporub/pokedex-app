import "@/components/StatsColorBar/StatsColorBar.css"

    const determineStatBarStyle = (statValue: number) => {
        if (statValue < 20) {
          return 'bar-20';
        } else if (statValue >= 20 && statValue < 40) {
          return 'bar-40';
        } else if (statValue >= 40 && statValue < 60) {
          return 'bar-60';
        } else if (statValue >= 60 && statValue < 80) {
          return 'bar-80'
        } else if (statValue >= 80 && statValue < 100) {
          return 'bar-100'
        } else if (statValue >= 100 && statValue <= 125) {
          return 'bar-125'
        } else {
          return 'bar-max'
        }
      };

      export const StatsColorBar = ({ statName, statValue }: { statName: string, statValue: number }) => {
        const statBarStyle = determineStatBarStyle(statValue);
      
        return (
          <div className="stat-bar">
            <span className="stat-name"><strong>{statName}:</strong> </span>
            <span className="stat-value">{statValue}</span>
            <div className={`bar ${statBarStyle}`}></div>
          </div>
        );
      }
      
      
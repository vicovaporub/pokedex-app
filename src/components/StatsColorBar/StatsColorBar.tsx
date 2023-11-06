import "@/components/StatsColorBar/StatsColorBar.css"


    const determineStatBarStyle = (statValue: number) => {
        if (statValue < 20) {
          return 'small-red-bar';
        } else if (statValue >= 20 && statValue < 50) {
          return 'medium-yellow-bar';
        } else {
          return 'big-green-bar';
        }
      };

      export const StatsColorBar = ({ statName, statValue }: { statName: string, statValue: number }) => {
        const statBarStyle = determineStatBarStyle(statValue);
      
        return (
          <div className="stat-bar">
            <span className="stat-name">{statName}: </span>
            <span className="stat-value">{statValue}</span>
            <div className={`bar ${statBarStyle}`}></div>
          </div>
        );
      }
      
      
import "@/components/StatsColorBar/StatsColorBar.css"

// VERMELHO - 20, LARANJA - 49, AMARELO - 70, VERDE - 100, AZUL CLARO 125+ 
    const determineStatBarStyle = (statValue: number) => {
        if (statValue < 20) {
          return 'red-bar';
        } else if (statValue >= 20 && statValue < 50) {
          return 'orange-bar';
        } else if (statValue >= 50 && statValue < 85) {
          return 'yellow-bar';
        } else if (statValue >= 85 && statValue < 110) {
          return 'green-bar'
        } else {
          return 'blue-bar'
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
      
      
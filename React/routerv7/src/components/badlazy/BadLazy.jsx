import { useEffect, useState } from 'react';
import styles from './BadLazy.module.css'

const data = { labels: ['Jan', 'Feb'], datasets: [{ label: 'Sales', data: [30, 40] }] };

export default function BadLazy() {

  const [lineObj, setLineObj] = useState()

  useEffect(() => {
    Promise.all(
      [import(/* webpackChunkName: "chartjs" */ 'chart.js'), import(/* webpackChunkName: "react-chartjs-2" */ 'react-chartjs-2')]
    ).then(([ChartObj, ReactChart2Obj]) => {
      const {
        Chart,
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
      } = ChartObj;

      Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
      setLineObj({ Line: ReactChart2Obj.Line })
    })
  }, [])

  if (!lineObj) {
    return <div>Loading chart...</div>; // Fallback while dependencies are loading
  }

  const { Line } = lineObj

  return (
    <div className={styles.graphContainer}>
      <Line data={data} />
    </div>
  )
}
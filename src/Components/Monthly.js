
import Table2m from './Table2m';
import Table3m from './Table3m';
import Table4m from './Table4m';
import Table5m from './Table5m';
import Table6m from './Table6m';
import Table7m from './Table7m';
import Table8m from './Table8m';
import Table9m from './Table9m';
import Table10m from './Table10m';
import Table11m from './Table11m';

const Monthly=({show, onClose})=>{
    return show ?(
        <div className='popup'>
            <div className='months'>
            <button className='close-btn' onClick={onClose}>Close</button>
      <Table2m />
      <Table3m />
      <Table4m />
      <Table5m />
      <Table6m />
      <Table7m />
      <Table8m />
      <Table9m />
      <Table10m />
      <Table11m />
      <button className='close-btn' onClick={onClose}>Close</button>
      </div>
        </div>
    ):null ;
}

export default Monthly
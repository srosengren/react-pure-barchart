var colors = ['FFDB45', 'EAB80F', 'CCC', '27292A'].reverse();

const Legend = ({data}) => (
    <div style={{display: 'table-cell', verticalAlign: 'middle', width:'20vw'}}>
        <ol style={{fontWeight: 'bold',fontSize:'1.2em'}}>
            {data.map((d,i) =>
                <li key={i} 
                    style={{color:'#' + colors[i % colors.length]}}>
                    {d.title}
                </li>)
            }
        </ol>
    </div>
);

function Bar({title,value,color,i,maxValue}){
    return (
        <div style={{display: 'table-cell', verticalAlign: 'bottom', padding: '0 0.5em'}}>
            <h2 style={{textAlign: 'center',margin:0}}>{value}</h2>
            <div style={{height: value / maxValue * 80 + '%',background:color}}></div>
            <h2 style={{textAlign: 'center',margin:0,color: '#999'}}>#{i+1}</h2>
        </div>
    );
}

function App({data}) {
    var maxValue = data.reduce(function (p, c) { return Math.max(p, c.value); }, 0);

    return (
        <div style={{ height: '90vh', width: '90vw', display: 'table',margin: 'auto' }}>
            {data.map((d,i) =>
                <Bar {...d}
                     key={i}
                     i={i}
                     color={'#' + colors[i % colors.length]}
                     maxValue={maxValue} />)
            }
            <Legend data={data} />
        </div>
    );
}

function render(){
    var data = [
        {title:'stuff',value: Math.ceil(Math.random() * 10)},
        {title:'thing',value: Math.ceil(Math.random() * 10)},
        {title:'Longer name thing',value: Math.ceil(Math.random() * 10)},
        {title:'thing2',value: Math.ceil(Math.random() * 10)}
    ];

    ReactDOM.render(<App data={data} />,document.getElementById('main'));
}

setInterval(render,1000);

render();
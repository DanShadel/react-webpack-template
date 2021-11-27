import React from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux';


const Container = styled.div`
    width: 100%;
    height: 100%;
    overflow
`;

const MuralRow = styled.div`
    width: 80%;
    margin-left: 10%;
    height: ${props => props.height};
    display: flex;
    flex-direction: row;

`;

const MuralItem = styled.div`
    display: flex;
    width: auto;
    height: 100%;
`;

const imgStyles = {
    maxWidth: '100%',
    maxHeight: '100%'
};

const getHeight = (size) => {
    const height = String(Math.floor(100 / size)) + '%';
    console.log(height);
    return height;
}

const Mural = ({ tracks }) => {
    const [size, setSize] = React.useState(0);
    const [rows, setRows] = React.useState([])
    console.log('rows:' + rows);

    React.useEffect(() => {
        let sqsize = Math.floor(Math.sqrt(tracks.length));
        setSize(sqsize)
        let temp = [];
        console.log('inEffect tracks:', tracks)
        for (let i = 0; i < sqsize; i++) {
            let slice = tracks.slice(0 + (i * sqsize), sqsize + (i * sqsize));
            temp.push(slice)
        }
        console.log('temp:' + temp);
        setRows(temp);

    }, [tracks])

    return (
        <Container>
            {
                rows.map((row) => {
                    return (
                        <MuralRow height={getHeight(size)}>
                            {row.map((track) => {
                                console.log(track)
                                return (
                                    <MuralItem>
                                        <img src={track.track.album.images[0].url} style={imgStyles} />
                                    </MuralItem>
                                )
                            })}
                        </MuralRow>
                    )
                })
            }
        </Container>
    )
}

const mapDispatchToProps = {}

const mapStateToProps = state => {
    return { ...state }
}

export default connect(mapStateToProps, mapDispatchToProps)(Mural);
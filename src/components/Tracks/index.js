import React, { useState } from 'react'
import { MdSearch } from 'react-icons/md';
import styles from './Tracks.module.css';
import TrackComponent from '../TrackComponent'

const TracksContainer = () => {

    const [searchText, setSearchText] = useState('');

    const Tracks = [
        {
            'id': 1,
            'title': 'Web dev',
            'domain': 'engineering',
            'content': 'This is a demo description',
            'photo': 'https://picsum.photos/200'
        },
        {
            'id': 1,
            'title': 'Web dev',
            'domain': 'medical',
            'content': 'This is a demo description',
            'photo': 'https://picsum.photos/200'
        },
        {
            'id': 1,
            'title': 'Web dev',
            'domain': 'medical',
            'content': 'This is a demo description',
            'photo': 'https://picsum.photos/200'
        },
        {
            'id': 1,
            'title': 'Web dev',
            'domain': 'engineering',
            'content': 'This is a demo description',
            'photo': 'https://picsum.photos/200'
        },
    ]

    const filteredTracks = Tracks.filter((note) =>
        note.domain.toLowerCase().includes(searchText)
    )

    const allTracks = filteredTracks.map(track => {
        return <TrackComponent key={track.id} track={track} />
    })

    return (
        <div className={styles["container"]}>
            <div className={styles["header"]}>
                <div className={styles["logo-bar"]}>
                    <div className={styles["logo"]}>CURVETTE CODOCTOBER</div>
                </div>
                <div className={styles["search"]}>
                    <MdSearch className={styles['search-icons']} size='1.3em' />
                    <input
                        onChange={(event) =>
                            setSearchText(event.target.value)
                        }
                        type='text'
                        placeholder='type to search...'
                    />
                </div>
            </div>
            <div className={styles["tracks"]}>
                {allTracks}
            </div>
        </div>
    )
}

export default TracksContainer

import algoliasearch from 'algoliasearch/lite'
import { MessageEntity } from 'entities/message.entity'
import { HitsProps, InstantSearch, SearchBox } from 'react-instantsearch-dom'

const searchClient = algoliasearch('BK7JIOAULO', 'f0226009fe73d40cc25fb7ceb0d44fd7')

export function Hit({ hit }: { hit: HitsProps<MessageEntity> }) {
    console.log(hit)
    return <></>
}

export function SearchForm() {
    return (
        <InstantSearch searchClient={searchClient} indexName="disney">
            <SearchBox translations={{ placeholder: 'Search for Movies' }} />
            {/* <Hits hitComponent={Hit}/> */}
        </InstantSearch>
    )
}

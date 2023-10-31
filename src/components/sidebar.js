import React, {useState} from 'react';
import '../styles/sidebar.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import qs from 'qs';



const Sidebar = () => {

    const { search } = useLocation();
    const buildQueryString = (operation, valueObj) => {
        

        const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

        const newQueryParams = {
            ...currentQueryParams,
            [operation]: JSON.stringify({
                ...JSON.parse(currentQueryParams[operation] || '{}'),
                ...valueObj,
            }),
        };
        
        return qs.stringify(newQueryParams, { addQueryPrefix: true, encode: false });
}

    const [query, setQuery] = useState("");

    const navigate = useNavigate();

    const handleSearch = event => {
        event.preventDefault();

        const newQueryString = buildQueryString('query', { 'title': { $regex: query } });

        navigate(newQueryString)
    }

    return (
        <div className='sidebar'>
            <h1>Search by City</h1>
            
            <Link to={buildQueryString('query',{ "city": "Manchester" })}>Manchester</Link>
            <Link to={buildQueryString('query',{ "city": "Leeds" })}>Leeds</Link>
            <Link to={buildQueryString('query',{ "city": "Sheffield" })}>Sheffield</Link>
            <Link to={buildQueryString('query',{ "city": "Liverpool" })}>Liverpool</Link>
            <Link to={buildQueryString('query',{ "city": "London" })}>London</Link>

            <h1>Sort by Price</h1>
            <Link to={buildQueryString('sort',{price:+1})}>Price Ascending Order</Link>
            <Link to={buildQueryString('sort', { price: -1 })}>Price Descending Order</Link>
            
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={query}
                    onChange={(e)=> setQuery(e.target.value)} />
                
                <button type="submit">Search</button>
            </form>
        </div>
    )
};


export default Sidebar;


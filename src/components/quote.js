import { useState, useEffect } from 'react';
import '../modules/quote.css';

const Quote = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const quoteUrl = 'https://api.api-ninjas.com/v1/quotes?category=inspirational';
    const uniqueKey = 'Hv2n3YgcDfpKJlcxk9+mOw==n8X0pWj3E1EYdanA';

    const getDataFromApi = async () => {
      try {
        const getDataConfig = {
          method: 'GET',
          headers: { 'X-Api-Key': uniqueKey },
          contentType: 'application/json',
        };
        const response = await fetch(quoteUrl, getDataConfig);
        const data = await response.json();
        setData(data[0]);
        setIsLoading(false);
        return data;
      } catch (error) {
        setError(error);
        return error;
      }
    };
    return getDataFromApi;
  }, []);
  const message = error ? 'Please Try Again Later' : 'Loading...';
  if (isLoading || error) {
    return <p className="message">{message}</p>;
  }
  return (
    <div className="quote-container">
      <blockquote className="quote">
        <span className="quote-text">{data.quote}</span>
        <cite className="quote-author">
          {data.author}
        </cite>
      </blockquote>
    </div>
  );
};

export default Quote;

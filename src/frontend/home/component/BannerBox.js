import React, { useEffect, useState } from 'react';
import { BannerContainer, BannerSliderContainer } from '../styles';
import BannerSlider from './BannerSlider';
import axios from 'axios';

const BannerBox = () => {
      const [loading, setLoading] = useState([]);
      const [banners, setBanners] = useState([]);

      const loadData = async () => {
            setLoading(true);
            await axios
                  .get(`${process.env.REACT_APP_SECRET_KEY}/api/banners`, {
                        headers: {
                              apikey: process.env.REACT_APP_API_KEY
                        }
                  })
                  .then((response) => {
                        if (response.data.result === 'success') {
                              setBanners(response.data.banners);
                        }
                  })
                  .catch((error) => {
                        console.log(error.message);
                  });
            setLoading(false);
      };

      useEffect(() => {
            loadData();
      }, []);

      return (
            <>
                  <BannerContainer>
                        <BannerSliderContainer>
                              {!loading ? (
                                    <BannerSlider banners={banners} />
                              ) : null}
                        </BannerSliderContainer>
                  </BannerContainer>
            </>
      );
};

export default BannerBox;

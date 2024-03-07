import React from 'react'
import { MainLayout } from '../../components/MainLayout'
import Hero from './container/Hero';
import ArticleCard from '../../components/ArticleCard';
const HomePage = () => {
  return ( <MainLayout>
    <Hero />
    <ArticleCard />
  </MainLayout>
  )
};

export default HomePage
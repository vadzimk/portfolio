import axios from 'axios';
import api from '@/services/api';

export async function getHomepageData() {
    try {
        // console.log(`calling ${process.env.BASE_URL}/api/homepage?populate=Avatar`)
        const res = await api.get('/homepage?populate=Avatar')

        // console.log(`response`, res.statusText)
        return res.data
    } catch (e) {
        console.log(e)
    }
}

export async function getTechnologiesData() {
    try {
        const res = await api.get('/specialisations?populate=technologies')
        return res.data
    } catch (e) {
        console.log(e)
    }
}

export async function getProjectsData() {
    try {
        const res = await api.get('/projects?populate=Image')
        return res.data
    } catch (e) {
        console.log(e)
    }
}
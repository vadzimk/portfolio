import axios from 'axios';
import api from '@/services/api';

export async function getHomepageData() {
    try {
        const res = await api.get('/homepage?populate=Avatar')
        return res.data
    } catch (e) {
        console.log(e.message)
    }
}

export async function getTechnologiesData() {
    try {
        const res = await api.get('/specialisations?populate=technologies')
        return res.data
    } catch (e) {
        console.log(e.message)
    }
}

export async function getProjectsData() {
    try {
        const res = await api.get('/projects?populate=Image')
        return res.data
    } catch (e) {
        console.log(e.message)
    }
}
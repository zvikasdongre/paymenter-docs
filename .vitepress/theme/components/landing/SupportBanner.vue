<script setup>
import { onMounted } from 'vue';
</script>


<template>
<section class="banner-support">
    <div class="banner-support-content">
        <div class="banner-support-left">
            <div class="banner-support-title">Support us to keep going</div>
            <p class="banner-support-subtitle">Your support helps us continue developing and enhancing Paymenter. Every contribution makes a difference!</p>
            <div class="buttons">
                <a href="https://github.com/sponsors/Paymenter" target="_blank" class="btn btn-secondary svg-right">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.1213 10.4816C13.7308 10.091 13.0976 10.091 12.7071 10.4816L12 11.1887C11.2189 11.9697 9.95259 11.9697 9.17154 11.1887C8.39049 10.4076 8.39049 9.14132 9.17154 8.36027L14.8022 2.72812C16.9061 2.25217 19.2008 2.83319 20.8388 4.47119C23.2582 6.89055 23.3716 10.7426 21.1792 13.2963L19.071 15.4313L14.1213 10.4816ZM3.16113 4.47119C5.33452 2.2978 8.66411 1.98527 11.17 3.5336L7.75732 6.94606C6.19523 8.50816 6.19523 11.0408 7.75732 12.6029C9.27209 14.1176 11.6995 14.1635 13.2695 12.7406L13.4142 12.6029L17.6568 16.8455L13.4142 21.0882C12.6331 21.8692 11.3668 21.8692 10.5858 21.0882L3.16113 13.6635C0.622722 11.1251 0.622722 7.00959 3.16113 4.47119Z" fill="#DB61A2"/>
                    </svg>
                    Sponsor
                </a>
                <a href="https://github.com/Paymenter/Paymenter" target="_blank" class="btn btn-secondary svg-right">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_161_50)">
                    <path d="M12.0006 18.2624L4.94715 22.2106L6.52248 14.2823L0.587891 8.79424L8.61493 7.8425L12.0006 0.502441L15.3862 7.8425L23.4132 8.79424L17.4787 14.2823L19.054 22.2106L12.0006 18.2624Z" fill="#E3B341"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_161_50">
                    <rect width="24" height="24" fill="white" transform="translate(0 0.00244141)"/>
                    </clipPath>
                    </defs>
                    </svg>
                    Star us on GitHub
                </a>
            </div>
            <a href="/docs/contribute/how-to-help" class="how-to-contribute">
                How to contribute?
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 13H4V11H12V4L20 12L12 20V13Z"></path></svg>
            </a>
        </div>
        <div class="dashboard-preview">
          <img style="border-radius:15px;" src="/landing/banner-img.png" alt="Paymenter" class="">
        </div>
    </div>
</section>
</template>


<style scoped> 
    /* banner-support styles */
    .banner-support {
        position: relative;
        width: 100%;
        height: 250px;
        overflow: hidden;
        background-position: center;
        background-image: url("/landing/texture.png");
        color: white;
        border-radius:20px;
    }
    
    .banner-support-content {
        position: relative;
        z-index: 2;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 30px;
    }
    
    .banner-support-title {
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 10px;
                line-height: 64px;
        font-size: 56px;
    }
    
    .banner-support-subtitle {
        font-size: 1rem;
        margin-bottom: 20px;
        opacity: 0.8;
    }
    
    .dashboard-preview {
        display: none;
    }
    
    /* Responsive styles */
    @media (min-width: 768px) {
        .banner-support {
            height: 300px;
        }
        
        .banner-support-content {
            flex-direction: row;
        }
        
        .banner-support-left {
            width: 60%;
        }
        
        .banner-support-title {
            font-size: 2.5rem;
        }
        
        .banner-support-subtitle {
            font-size: 1.1rem;
        }
        
        .dashboard-preview {
            display: block;
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 40%;
            height: 100%;
            background-image: url('/placeholder.svg?height=300&width=400');
            background-size: cover;
            background-position: center;
        }
    }
</style>
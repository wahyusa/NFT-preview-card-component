<script lang="ts">
    import equilibrium from "../assets/images/image-equilibrium.jpg"
    import iconethereum from "../assets/images/icon-ethereum.svg"
    import iconclock from "../assets/images/icon-clock.svg"
    import iconview from "../assets/images/icon-view.svg"
    import avatar from "../assets/images/image-avatar.png"
</script>

<section class="max-w-[325px] mx-auto bg-brand-very-dark-blue-card font-outfit text-white rounded-xl shadow overflow-hidden">
    <div class="flex flex-col space-y-4 p-6 font-light text-brand-soft-blue">
        <div class="relative hover rounded-xl shadow overflow-hidden">
        <img src="{ equilibrium }" alt="Equilibrium NFT Preview">
        <div class="bg-brand-cyan/50 opacity-0 hover:opacity-100 transition-all duration-500 hover:cursor-pointer absolute inset-0 flex flex-col items-center justify-center">
        <img class="max-w-full" src="{ iconview }" alt="">
        </div>
        </div>
        <h1 class="text-xl font-semibold text-white cursor-pointer hover:text-brand-cyan transition-colors duration-300">Equilibrium #3429</h1>
        <p>Our Equilibrium collection promotes balance and calm.</p>
        <div class="flex items-center justify-between">
            <span class="text-brand-cyan font-semibold inline-flex items-center">
                <img src="{ iconethereum }" alt="" class="mr-2">
                0.041 ETH
            </span>
            <span class="inline-flex items-center font-light">
                <img src="{ iconclock }" alt="" class="mr-2">
                3 days left
            </span>
        </div>
        <span class="bg-brand-very-dark-blue-line h-[1px]"></span>
        <div class="flex items-center">
            <img class="text-red-600 rounded-full border-2 w-9 mr-5" src="{ avatar }" alt="Jules Wyvern Avatar">
            <span>Creation of</span>&nbsp;<span class="text-white cursor-pointer hover:text-brand-cyan transition-colors duration-300">Jules Wyvern</span>
        </div>
    </div>
</section>
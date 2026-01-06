export const SolarSystem = () => {
    return (
        <div id="solarSystemContainer">
            <div class="solar-system">
                <svg viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid meet">

                    <g class="orbit orbit1">
                        <circle cx="500" cy="500" r="200" class="orbit-path" />
                        <circle cx="700" cy="500" r="16" class="planet1" />
                    </g>


                    <g class="orbit orbit2">
                        <circle cx="500" cy="500" r="300" class="orbit-path" />
                        <circle cx="800" cy="500" r="20" class="planet2" />
                    </g>


                    <g class="orbit orbit3">
                        <circle cx="500" cy="500" r="400" class="orbit-path" />
                        <circle cx="900" cy="500" r="24" class="planet3" />
                    </g>
                </svg>
            </div>
        </div>
    )
}
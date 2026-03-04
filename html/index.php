<?php
// Include header
include 'header.php';
?>

<!-- Grid layout for the different world clock cards -->
<div class="worldclock__grid">

    <!-- Clock card for Berlin -->
    <div class="clock-card" data-timezone="Etc/GMT-1">
        <div class="clock-card__header">
            <span class="clock-card__offset">GMT+1</span>
        </div>
        <div class="clock-card__body">
            <div class="clock-card__city">Berlin</div>
            <span class="clock-card__time">--:--</span>
            <span class="clock-card__date">...</span>
        </div>

        <!-- Analog clock face (animated via JS) -->
        <div class="clock-face">
            <div class="clock-face__hand clock-face__hand--hour"></div>
            <div class="clock-face__hand clock-face__hand--minute"></div>
            <div class="clock-face__hand clock-face__hand--second"></div>
            <div class="clock-face__center"></div>
        </div>
    </div>

    <!-- Clock card for London (UTC) -->
    <div class="clock-card" data-timezone="UTC">
        <div class="clock-card__header">
            <span class="clock-card__offset">UTC</span>
        </div>
        <div class="clock-card__body">
            <div class="clock-card__city">London</div>
            <span class="clock-card__time">--:--</span>
            <span class="clock-card__date">...</span>
        </div>
        <div class="clock-face">
            <div class="clock-face__hand clock-face__hand--hour"></div>
            <div class="clock-face__hand clock-face__hand--minute"></div>
            <div class="clock-face__hand clock-face__hand--second"></div>
            <div class="clock-face__center"></div>
        </div>
    </div>

    <!-- Clock card for New York -->
    <div class="clock-card" data-timezone="Etc/GMT+5">
        <div class="clock-card__header">
            <span class="clock-card__offset">GMT-5</span>
        </div>
        <div class="clock-card__body">
            <div class="clock-card__city">New York</div>
            <span class="clock-card__time">--:--</span>
            <span class="clock-card__date">...</span>
        </div>
        <div class="clock-face">
            <div class="clock-face__hand clock-face__hand--hour"></div>
            <div class="clock-face__hand clock-face__hand--minute"></div>
            <div class="clock-face__hand clock-face__hand--second"></div>
            <div class="clock-face__center"></div>
        </div>
    </div>

    <!-- Clock card for Tokyo -->
    <div class="clock-card" data-timezone="Etc/GMT-9">
        <div class="clock-card__header">
            <span class="clock-card__offset">GMT+9</span>
        </div>
        <div class="clock-card__body">
            <div class="clock-card__city">Tokyo</div>
            <span class="clock-card__time">--:--</span>
            <span class="clock-card__date">...</span>
        </div>
        <div class="clock-face">
            <div class="clock-face__hand clock-face__hand--hour"></div>
            <div class="clock-face__hand clock-face__hand--minute"></div>
            <div class="clock-face__hand clock-face__hand--second"></div>
            <div class="clock-face__center"></div>
        </div>
    </div>

</div>

<?php
// Include footer
include 'footer.php';
?>
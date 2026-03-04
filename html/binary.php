<?php
// Include header (navigation and base HTML structure)
include 'header.php';
?>

<!-- Binary clock container with timezone attribute (UTC+1) -->
<div class="binary-clock__container" data-timezone="Etc/GMT-1">
    <h2 class="binary-clock__title">Binary Clock</h2>

    <!-- Grid layout for the binary display -->
    <div class="binary-grid">
        <!-- Labels for bit values (8, 4, 2, 1) -->
        <div class="binary-grid__labels">
            <div class="binary-grid__label">8</div>
            <div class="binary-grid__label">4</div>
            <div class="binary-grid__label">2</div>
            <div class="binary-grid__label">1</div>
        </div>

        <?php
        // h=hours, m=minutes, s=seconds; each has 2 columns (tens and ones)
        $cols = ['h1', 'h2', 'm1', 'm2', 's1', 's2'];
        // The four bits of one column
        $bits = [8, 4, 2, 1];

        // Loop through each clock column
        foreach ($cols as $col) {
            echo '<div class="binary-column" data-col="' . $col . '">';
            // Each column gets 4 "bits" (dots)
            foreach ($bits as $bit) {
                echo '<div class="binary-bit" data-bit="' . $bit . '"></div>';
            }
            // Numeric label below the column
            echo '<div class="binary-column__label text-center mt-2">0</div>';
            echo '</div>';
        }
        ?>
    </div>

    <!-- Additional digital display of current time -->
    <div class="digital-display">
        <span id="digital-time">--:--:--</span>
    </div>
</div>

<?php
// Include footer (scripts and copyright)
include 'footer.php';
?>
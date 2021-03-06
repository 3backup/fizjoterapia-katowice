<?php /* Template name: Consultation */?>
<?php get_header();?>
<link rel="stylesheet" href="<?php echo get_template_directory_uri();?>/css/team.css">
<script src="<?php echo get_template_directory_uri(); ?>/js/slick.min.js"></script>
<main>

<section class="shared-components__Section-sc-1glemx5-0 sc-hrWEMg ljszXM">

<div class="shared-components__Container-sc-1glemx5-1 bkTpWs">
    <h2 class="sc-hmzhuo gIamDp shared-components__Header-sc-1glemx5-2 ivQTeq"><?php the_field('consultation_header');?><small><?php the_field('consultation_subheader'); ?></small>
</h2>
</div>
</section>
<?php echo get_template_part('template-parts/home/services') ?>
<?php echo get_template_part('template-parts/home/testimonials') ?>
<?php if(get_field('cos_calendar_link')): ?>
		<section class="calendar consultation" id="calendar">
			<div class="container">
				<h2><?php the_field('cons_cal_title'); ?></h2>
				<p><?php the_field('cons_cal_content'); ?></p>
				<a href="<?php echo get_field('cons_cal_link')['url']; ?>" class="link--underline"><?php echo get_field('cos_calendar_link')['title']; ?></a>
			</div>
		</section>
	<?php endif; ?>
</main>
<?php get_footer();

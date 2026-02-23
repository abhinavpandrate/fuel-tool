window.STYRKR_DATA = {
  "meta": {
    "generated_from": "Fueltool + bundle Builder v2.xlsx",
    "currency": "GBP",
    "discount_first_order": 0.25,
    "bundle_min_distinct_items": 4
  },
  "rules": {
    "activity_multiplier": {
      "Running": 0.95,
      "Cycling": 1.05,
      "Triathlon": 1.0,
      "Hybrid": 0.75
    },
    "rpe_factor_thresholds": [
      {
        "min_rpe": 1.0,
        "factor": 0.8
      },
      {
        "min_rpe": 4.0,
        "factor": 0.9
      },
      {
        "min_rpe": 6.0,
        "factor": 0.97
      },
      {
        "min_rpe": 8.0,
        "factor": 1.05
      },
      {
        "min_rpe": 10.0,
        "factor": 1.1
      }
    ],
    "duration_bands": [
      {
        "band": "<1h",
        "low": 0.0,
        "mid": 20.0,
        "high": 30.0
      },
      {
        "band": "1\u20132h",
        "low": 30.0,
        "mid": 45.0,
        "high": 60.0
      },
      {
        "band": "2\u20133h",
        "low": 50.0,
        "mid": 70.0,
        "high": 90.0
      },
      {
        "band": "3\u20135h",
        "low": 70.0,
        "mid": 90.0,
        "high": 100.0
      },
      {
        "band": "5\u20138h",
        "low": 80.0,
        "mid": 90.0,
        "high": 110.0
      },
      {
        "band": "8h+",
        "low": 60.0,
        "mid": 80.0,
        "high": 100.0
      }
    ],
    "carb_mode_caps": {
      "Standard": 90.0,
      "Advanced": 120.0
    },
    "sweat_rate_mlph": {
      "Not very sweaty at all": 400.0,
      "Fairly sweaty": 600.0,
      "I have a normal sweat rate": 800.0,
      "Very sweaty": 1000.0
    },
    "conditions_fluid_adj_mlph": {
      "Cold (<10\u00b0C)": -150.0,
      "Mild (10\u201318\u00b0C)": 0.0,
      "Hot (19\u201326\u00b0C)": 150.0,
      "Very hot (>26\u00b0C)": 300.0
    },
    "sweat_sodium_mgL": {
      "Not salty at all": 500.0,
      "Kinda salty": 900.0,
      "Very salty (I get white marks on my kit)": 1500.0
    },
    "caffeine_fraction": {
      "None": 0.0,
      "Some": 0.25,
      "High": 0.5
    },
    "plan_styles": {
      "Mix-led": {
        "description": "Mostly drinks + a few gels (simple, bottle-friendly)",
        "drink_share": 0.8,
        "gel_share": 0.15,
        "bar_share": 0.05,
        "gel50_share": 0.5,
        "bar50_share": 0.5
      },
      "Drink-led": {
        "description": "Drink-first with some gels + a touch of bars (variety)",
        "drink_share": 0.7,
        "gel_share": 0.25,
        "bar_share": 0.05,
        "gel50_share": 0.5,
        "bar50_share": 0.5
      },
      "Gel-led": {
        "description": "Mostly gels; keeps drinks light (good for running)",
        "drink_share": 0.15,
        "gel_share": 0.75,
        "bar_share": 0.1,
        "gel50_share": 0.7,
        "bar50_share": 0.5
      },
      "Bar-led": {
        "description": "Bars as the backbone; gels top-up (adventures)",
        "drink_share": 0.15,
        "gel_share": 0.35,
        "bar_share": 0.5,
        "gel50_share": 0.5,
        "bar50_share": 0.8
      },
      "Adventure-led": {
        "description": "Balanced mix of drinks, gels and bars (long days)",
        "drink_share": 0.35,
        "gel_share": 0.3,
        "bar_share": 0.35,
        "gel50_share": 0.6,
        "bar50_share": 0.7
      },
      "Balanced": {
        "description": "Even split with steady variety",
        "drink_share": 0.4,
        "gel_share": 0.4,
        "bar_share": 0.2,
        "gel50_share": 0.5,
        "bar50_share": 0.6
      }
    }
  },
  "products": {
    "MIX60": {
      "sku": "MIX60",
      "name": "MIX60 Dual-Carb Energy Drink Mix",
      "category": "Carb+Hydration",
      "unit_type": "Sachet serving",
      "serving_size": "65 g powder",
      "carbs_g": 60.0,
      "sodium_mg": 56.0,
      "caffeine_mg": 0.0,
      "mix_water_ml": 500.0,
      "default_pack_size_units": 12.0,
      "one_time_rrp_gbp": 24.99,
      "url": "https://styrkr.com/products/mix60-dual-carb-drink"
    },
    "MIX90": {
      "sku": "MIX90",
      "name": "MIX90 Dual-Carb Energy Drink Mix",
      "category": "Carb+Hydration",
      "unit_type": "Sachet serving",
      "serving_size": "95 g powder",
      "carbs_g": 90.0,
      "sodium_mg": 80.0,
      "caffeine_mg": 0.0,
      "mix_water_ml": 500.0,
      "default_pack_size_units": 12.0,
      "one_time_rrp_gbp": 29.99,
      "url": "https://styrkr.com/products/mix90-dual-carb-drink"
    },
    "MIX90_CAFF": {
      "sku": "MIX90_CAFF",
      "name": "MIX90 Caffeine Dual-Carb Energy Drink Mix",
      "category": "Carb+Hydration",
      "unit_type": "Sachet serving",
      "serving_size": "95 g powder",
      "carbs_g": 90.0,
      "sodium_mg": 80.0,
      "caffeine_mg": 150.0,
      "mix_water_ml": 500.0,
      "default_pack_size_units": 12.0,
      "one_time_rrp_gbp": 34.99,
      "url": "https://styrkr.com/products/mix90-caffeine-dual-carb-drink"
    },
    "MIXPLUS": {
      "sku": "MIXPLUS",
      "name": "MIX+ Dual-Carb & Electrolyte Mix (tub)",
      "category": "Carb+Hydration",
      "unit_type": "Scoop serving",
      "serving_size": "37 g scoop",
      "carbs_g": 30.3,
      "sodium_mg": 360.0,
      "caffeine_mg": 0.0,
      "mix_water_ml": 500.0,
      "default_pack_size_units": 15.0,
      "one_time_rrp_gbp": 19.99,
      "url": "https://styrkr.com/products/byob-mix-blood-orange-dual-carb-electrolyte-mix"
    },
    "GEL30": {
      "sku": "GEL30",
      "name": "GEL30 Dual-Carb Energy Gel",
      "category": "Carb",
      "unit_type": "Gel sachet",
      "serving_size": "72 g",
      "carbs_g": 30.0,
      "sodium_mg": 0.0,
      "caffeine_mg": 0.0,
      "mix_water_ml": null,
      "default_pack_size_units": 12.0,
      "one_time_rrp_gbp": 24.99,
      "url": "https://styrkr.com/products/gel30-dual-carb-gel"
    },
    "GEL30_CAFF": {
      "sku": "GEL30_CAFF",
      "name": "GEL30 Caffeine Energy Gel",
      "category": "Carb",
      "unit_type": "Gel sachet",
      "serving_size": "72 g",
      "carbs_g": 30.0,
      "sodium_mg": 0.0,
      "caffeine_mg": 150.0,
      "mix_water_ml": null,
      "default_pack_size_units": 12.0,
      "one_time_rrp_gbp": 24.99,
      "url": "https://styrkr.com/products/gel30-dual-carb-gel-caffeine"
    },
    "GEL50": {
      "sku": "GEL50",
      "name": "GEL50 Dual-Carb Energy Gel",
      "category": "Carb",
      "unit_type": "Gel sachet",
      "serving_size": "72 g",
      "carbs_g": 50.0,
      "sodium_mg": 0.0,
      "caffeine_mg": 0.0,
      "mix_water_ml": null,
      "default_pack_size_units": 12.0,
      "one_time_rrp_gbp": 29.99,
      "url": "https://styrkr.com/products/gel50-dual-carb-energy-gel-citrus-fruits"
    },
    "BAR30": {
      "sku": "BAR30",
      "name": "BAR30 Energy Rice Bar (avg across flavours)",
      "category": "Carb",
      "unit_type": "Bar",
      "serving_size": "~42 g bar",
      "carbs_g": 30.0,
      "sodium_mg": 115.0,
      "caffeine_mg": 0.0,
      "mix_water_ml": null,
      "default_pack_size_units": 12.0,
      "one_time_rrp_gbp": 19.99,
      "url": "https://styrkr.com/products/bar30-high-carb-rice-energy-bar"
    },
    "BAR50": {
      "sku": "BAR50",
      "name": "BAR50 Energy Rice Bar (avg across flavours)",
      "category": "Carb",
      "unit_type": "Bar",
      "serving_size": "~70 g bar",
      "carbs_g": 50.4,
      "sodium_mg": 239.0,
      "caffeine_mg": 0.0,
      "mix_water_ml": null,
      "default_pack_size_units": 12.0,
      "one_time_rrp_gbp": 29.99,
      "url": "https://styrkr.com/products/bar50-variety-pack-energy-bars"
    },
    "SLT07_500": {
      "sku": "SLT07_500",
      "name": "SLT07 Hydration Tablets 500mg sodium",
      "category": "Electrolyte",
      "unit_type": "Tablet",
      "serving_size": "1 tablet",
      "carbs_g": 0.0,
      "sodium_mg": 500.0,
      "caffeine_mg": 0.0,
      "mix_water_ml": 500.0,
      "default_pack_size_units": 12.0,
      "one_time_rrp_gbp": 9.99,
      "url": "https://styrkr.com/products/slt07-hydration-tablets-mild-berry-500mg"
    },
    "SLT07_1000": {
      "sku": "SLT07_1000",
      "name": "SLT07 Hydration Tablets 1000mg sodium",
      "category": "Electrolyte",
      "unit_type": "Tablet",
      "serving_size": "1 tablet",
      "carbs_g": 0.0,
      "sodium_mg": 1000.0,
      "caffeine_mg": 0.0,
      "mix_water_ml": 500.0,
      "default_pack_size_units": 12.0,
      "one_time_rrp_gbp": 9.99,
      "url": "https://styrkr.com/products/slt07-hydration-tablets-mild-citrus"
    },
    "SLTPLUS": {
      "sku": "SLTPLUS",
      "name": "SLT+ High-Strength Electrolyte Supplement",
      "category": "Electrolyte",
      "unit_type": "Sachet serving",
      "serving_size": "7.5 g",
      "carbs_g": 0.0,
      "sodium_mg": 1080.0,
      "caffeine_mg": 0.0,
      "mix_water_ml": 500.0,
      "default_pack_size_units": 30.0,
      "one_time_rrp_gbp": 29.99,
      "url": "https://styrkr.com/products/slt-plus"
    }
  },
  "packs": {
    "MIX60_6": {
      "pack_key": "MIX60_6",
      "sku": "MIX60",
      "pack_option": "6 pack",
      "units_per_pack": 6.0,
      "rrp_gbp": 13.99,
      "notes": "BYOB option",
      "url": "https://styrkr.com/products/mix60-dual-carb-energy-drink-mix-copy",
      "rc_product_id": 15658994794878,
      "rc_variant_id": 56589794050430
    },
    "MIX60_12": {
      "pack_key": "MIX60_12",
      "sku": "MIX60",
      "pack_option": "12 pack",
      "units_per_pack": 12.0,
      "rrp_gbp": 24.99,
      "notes": "BYOB option",
      "url": "https://styrkr.com/products/mix60-dual-carb-energy-drink-mix-copy",
      "rc_product_id": 15658994794878,
      "rc_variant_id": 56519067828606
    },
    "MIX90_6": {
      "pack_key": "MIX90_6",
      "sku": "MIX90",
      "pack_option": "6 pack",
      "units_per_pack": 6.0,
      "rrp_gbp": 16.99,
      "notes": "BYOB option",
      "url": "https://styrkr.com/products/mix90-dual-carb-energy-drink-mix-copy",
      "rc_product_id": 15659003085182,
      "rc_variant_id": 56589777731966
    },
    "MIX90_12": {
      "pack_key": "MIX90_12",
      "sku": "MIX90",
      "pack_option": "Box of 12",
      "units_per_pack": 12.0,
      "rrp_gbp": 29.99,
      "notes": "BYOB option",
      "url": "https://styrkr.com/products/mix90-dual-carb-energy-drink-mix-copy",
      "rc_product_id": 15659003085182,
      "rc_variant_id": 56519094436222
    },
    "MIX90_CAFF_6": {
      "pack_key": "MIX90_CAFF_6",
      "sku": "MIX90_CAFF",
      "pack_option": "6 pack",
      "units_per_pack": 6.0,
      "rrp_gbp": 17.99,
      "notes": "BYOB option",
      "url": "https://styrkr.com/products/byob-mix90-caffeine-dual-carb-energy-drink-mix",
      "rc_product_id": 15658994368894,
      "rc_variant_id": 56519066976638
    },
    "MIX90_CAFF_12": {
      "pack_key": "MIX90_CAFF_12",
      "sku": "MIX90_CAFF",
      "pack_option": "12 pack",
      "units_per_pack": 12.0,
      "rrp_gbp": 34.99,
      "notes": "BYOB option",
      "url": "https://styrkr.com/products/byob-mix90-caffeine-dual-carb-energy-drink-mix",
      "rc_product_id": 15658994368894,
      "rc_variant_id": 56589521224062
    },
    "MIXPLUS_15": {
      "pack_key": "MIXPLUS_15",
      "sku": "MIXPLUS",
      "pack_option": "556g tub (~15 servings)",
      "units_per_pack": 15.0,
      "rrp_gbp": 19.99,
      "notes": "Serving=37g scoop",
      "url": "https://styrkr.com/products/byob-mix-pink-grapefruit-dual-carb-electrolyte-mix",
      "rc_product_id": 15658993418622,
      "rc_variant_id": 56519065796990
    },
    "MIXPLUS_25": {
      "pack_key": "MIXPLUS_25",
      "sku": "MIXPLUS",
      "pack_option": "926g tub (~25 servings)",
      "units_per_pack": 25.0,
      "rrp_gbp": 29.99,
      "notes": "Serving=37g scoop",
      "url": "https://styrkr.com/products/byob-mix-pink-grapefruit-dual-carb-electrolyte-mix",
      "rc_product_id": 15658993418622,
      "rc_variant_id": 56519065829758
    },
    "GEL30_6": {
      "pack_key": "GEL30_6",
      "sku": "GEL30",
      "pack_option": "6 pack",
      "units_per_pack": 6.0,
      "rrp_gbp": 13.99,
      "notes": "BYOB option",
      "url": "https://styrkr.com/products/vq-byob-gel30-dual-carb-energy-gel-1x-copy",
      "rc_product_id": 15666723225982,
      "rc_variant_id": 56540831482238
    },
    "GEL30_12": {
      "pack_key": "GEL30_12",
      "sku": "GEL30",
      "pack_option": "12 pack",
      "units_per_pack": 12.0,
      "rrp_gbp": 24.99,
      "notes": "BYOB option",
      "url": "https://styrkr.com/products/vq-byob-gel30-dual-carb-energy-gel-1x-copy",
      "rc_product_id": 15666723225982,
      "rc_variant_id": 56540831449470
    },
    "GEL30_CAFF_6": {
      "pack_key": "GEL30_CAFF_6",
      "sku": "GEL30_CAFF",
      "pack_option": "6 pack",
      "units_per_pack": 6.0,
      "rrp_gbp": 13.99,
      "notes": "BYOB option",
      "url": "https://styrkr.com/products/vq-byob-gel30-caffeine-energy-gel-1x-copy",
      "rc_product_id": 15666724077950,
      "rc_variant_id": 56540832989566
    },
    "GEL30_CAFF_12": {
      "pack_key": "GEL30_CAFF_12",
      "sku": "GEL30_CAFF",
      "pack_option": "12 pack",
      "units_per_pack": 12.0,
      "rrp_gbp": 24.99,
      "notes": "BYOB option",
      "url": "https://styrkr.com/products/vq-byob-gel30-caffeine-energy-gel-1x-copy",
      "rc_product_id": 15666724077950,
      "rc_variant_id": 56540832956798
    },
    "GEL50_12": {
      "pack_key": "GEL50_12",
      "sku": "GEL50",
      "pack_option": "12 pack",
      "units_per_pack": 12.0,
      "rrp_gbp": 29.99,
      "notes": "Standard box of 12",
      "url": "https://styrkr.com/products/byob-gel50-dual-carb-energy-gel-citrus-fruits-1x-copy",
      "rc_product_id": 15666728796542,
      "rc_variant_id": 56540881944958
    },
    "BAR30_12": {
      "pack_key": "BAR30_12",
      "sku": "BAR30",
      "pack_option": "Variety Box",
      "units_per_pack": 12.0,
      "rrp_gbp": 19.99,
      "notes": "1 box / 12 bars",
      "url": "https://styrkr.com/products/bar30-high-carb-rice-energy-bar",
      "rc_product_id": 15538357830014,
      "rc_variant_id": 56124173058430
    },
    "BAR50_6": {
      "pack_key": "BAR50_6",
      "sku": "BAR50",
      "pack_option": "6 pack",
      "units_per_pack": 6.0,
      "rrp_gbp": 16.99,
      "notes": "BYOB option",
      "url": "https://styrkr.com/products/vq-byob-bar50-dark-chocolate-chip-x1-copy",
      "rc_product_id": 15666721685886,
      "rc_variant_id": 56540827582846
    },
    "BAR50_12": {
      "pack_key": "BAR50_12",
      "sku": "BAR50",
      "pack_option": "12 pack",
      "units_per_pack": 12.0,
      "rrp_gbp": 29.99,
      "notes": "BYOB option",
      "url": "https://styrkr.com/products/vq-byob-bar50-dark-chocolate-chip-x1-copy",
      "rc_product_id": 15666721685886,
      "rc_variant_id": 56540827550078
    },
    "SLT07_500_T12": {
      "pack_key": "SLT07_500_T12",
      "sku": "SLT07_500",
      "pack_option": "Tube of 12",
      "units_per_pack": 12.0,
      "rrp_gbp": 9.99,
      "notes": "500mg sodium/tab",
      "url": "https://styrkr.com/products/slt07-hydration-tablets-mild-berry-500mg",
      "rc_product_id": 15740724380030,
      "rc_variant_id": 56791854154110
    },
    "SLT07_500_B3": {
      "pack_key": "SLT07_500_B3",
      "sku": "SLT07_500",
      "pack_option": "Box of 3",
      "units_per_pack": 36.0,
      "rrp_gbp": 24.99,
      "notes": "500mg sodium/tab",
      "url": "https://styrkr.com/products/slt07-hydration-tablets-mild-berry-500mg",
      "rc_product_id": 15740724380030,
      "rc_variant_id": 56791855759742
    },
    "SLT07_500_B6": {
      "pack_key": "SLT07_500_B6",
      "sku": "SLT07_500",
      "pack_option": "Box of 6",
      "units_per_pack": 72.0,
      "rrp_gbp": 49.99,
      "notes": "500mg sodium/tab",
      "url": "https://styrkr.com/products/slt07-hydration-tablets-mild-berry-500mg",
      "rc_product_id": 15740724380030,
      "rc_variant_id": 56791855792510
    },
    "SLT07_1000_T12": {
      "pack_key": "SLT07_1000_T12",
      "sku": "SLT07_1000",
      "pack_option": "Tube of 12",
      "units_per_pack": 12.0,
      "rrp_gbp": 9.99,
      "notes": "1000mg sodium/tab",
      "url": "https://styrkr.com/products/slt07-hydration-tablets-mild-citrus",
      "rc_product_id": 15740722872702,
      "rc_variant_id": 56791845568894
    },
    "SLT07_1000_B3": {
      "pack_key": "SLT07_1000_B3",
      "sku": "SLT07_1000",
      "pack_option": "Box of 3",
      "units_per_pack": 36.0,
      "rrp_gbp": 24.99,
      "notes": "1000mg sodium/tab",
      "url": "https://styrkr.com/products/slt07-hydration-tablets-mild-citrus",
      "rc_product_id": 15740722872702,
      "rc_variant_id": 56791851532670
    },
    "SLT07_1000_B6": {
      "pack_key": "SLT07_1000_B6",
      "sku": "SLT07_1000",
      "pack_option": "Box of 6",
      "units_per_pack": 72.0,
      "rrp_gbp": 49.95,
      "notes": "1000mg sodium/tab",
      "url": "https://styrkr.com/products/slt07-hydration-tablets-mild-citrus",
      "rc_product_id": 15740722872702,
      "rc_variant_id": 56791851565438
    },
    "SLTPLUS_30": {
      "pack_key": "SLTPLUS_30",
      "sku": "SLTPLUS",
      "pack_option": "Variety Box",
      "units_per_pack": 30.0,
      "rrp_gbp": 29.99,
      "notes": "1080mg sodium/serv",
      "url": "https://styrkr.com/products/slt-plus",
      "rc_product_id": 15363667689854,
      "rc_variant_id": 55988528480638
    }
  },
  "packs_by_sku": {
    "MIX60": [
      "MIX60_6",
      "MIX60_12"
    ],
    "MIX90": [
      "MIX90_6",
      "MIX90_12"
    ],
    "MIX90_CAFF": [
      "MIX90_CAFF_6",
      "MIX90_CAFF_12"
    ],
    "MIXPLUS": [
      "MIXPLUS_15",
      "MIXPLUS_25"
    ],
    "GEL30": [
      "GEL30_6",
      "GEL30_12"
    ],
    "GEL30_CAFF": [
      "GEL30_CAFF_6",
      "GEL30_CAFF_12"
    ],
    "GEL50": [
      "GEL50_12"
    ],
    "BAR30": [
      "BAR30_12"
    ],
    "BAR50": [
      "BAR50_6",
      "BAR50_12"
    ],
    "SLT07_500": [
      "SLT07_500_T12",
      "SLT07_500_B3",
      "SLT07_500_B6"
    ],
    "SLT07_1000": [
      "SLT07_1000_T12",
      "SLT07_1000_B3",
      "SLT07_1000_B6"
    ],
    "SLTPLUS": [
      "SLTPLUS_30"
    ]
  }
};

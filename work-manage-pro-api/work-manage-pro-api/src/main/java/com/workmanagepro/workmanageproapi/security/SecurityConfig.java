package com.workmanagepro.workmanageproapi.security;

//@Configuration
public class SecurityConfig {

//    @Bean
//    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//        var requestHandler = new CsrfTokenRequestAttributeHandler();
//        requestHandler.setCsrfRequestAttributeName("_csrf");
//        http.securityContext((context) -> context
//                        .requireExplicitSave(false))
//                .sessionManagement(session -> session
//                        .sessionCreationPolicy(SessionCreationPolicy.ALWAYS))
//                .cors(corsCustomizer -> corsCustomizer.configurationSource(request -> {
//                    var config = new CorsConfiguration();
//                    config.setAllowedOrigins(Collections.singletonList("http://localhost:4200"));
//                    config.setAllowedMethods(Collections.singletonList("*"));
//                    config.setAllowCredentials(false);
//                    config.setAllowedHeaders(Collections.singletonList("*"));
//                    config.setMaxAge(3600L);
//                    return config;
//                })).csrf((csrf) -> csrf.csrfTokenRequestHandler(requestHandler)
////                        .ignoringRequestMatchers("/users", "/login")
//                        .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse()))
//                .addFilterAfter(new CsrfCookieFilter(), BasicAuthenticationFilter.class)
//                .authorizeHttpRequests((requests) -> requests
//                        .requestMatchers("/api/**").permitAll())
////                        .requestMatchers("/employees/**", "/finances/**", "/inventories/**", "/suppliers")
////                        .authenticated()
////                        .requestMatchers("users/register", "/login").permitAll())
//                .formLogin(Customizer.withDefaults())
//                .httpBasic(Customizer.withDefaults());
//        return http.build();
//    }

//    @Bean
//    public PasswordEncoder passwordEncoder() {
//        return new BCryptPasswordEncoder();
//    }

}

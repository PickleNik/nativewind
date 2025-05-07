import { CircleUser, MessageCircleMore } from "lucide-react";

export default function HeroSectionVisual() {
  return (
    <div className="h-full w-full max-w-screen max-h-screen sm:max-h-[min(50vh,600px)] flex-1 flex justify-center">
      <div className="flex relative w-fit justify-center max-w-screen">
        <div className="border p-1 rounded-full flex gap-1 absolute -top-4 -translate-y-full right-0 bg-fd-card">
          <div className="border p-1 rounded-full bg-fd-accent">
          <svg role="img" viewBox="0 0 24 24" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg"><title>Apple</title><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"></path></svg>
          </div>
          <div className="border p-1 rounded-full bg-fd-accent">
          <svg role="img" viewBox="0 0 24 24" className="h-5 w-5 fill-emerald-400" xmlns="http://www.w3.org/2000/svg"><title>Android</title><path d="M18.4395 5.5586c-.675 1.1664-1.352 2.3318-2.0274 3.498-.0366-.0155-.0742-.0286-.1113-.043-1.8249-.6957-3.484-.8-4.42-.787-1.8551.0185-3.3544.4643-4.2597.8203-.084-.1494-1.7526-3.021-2.0215-3.4864a1.1451 1.1451 0 0 0-.1406-.1914c-.3312-.364-.9054-.4859-1.379-.203-.475.282-.7136.9361-.3886 1.5019 1.9466 3.3696-.0966-.2158 1.9473 3.3593.0172.031-.4946.2642-1.3926 1.0177C2.8987 12.176.452 14.772 0 18.9902h24c-.119-1.1108-.3686-2.099-.7461-3.0683-.7438-1.9118-1.8435-3.2928-2.7402-4.1836a12.1048 12.1048 0 0 0-2.1309-1.6875c.6594-1.122 1.312-2.2559 1.9649-3.3848.2077-.3615.1886-.7956-.0079-1.1191a1.1001 1.1001 0 0 0-.8515-.5332c-.5225-.0536-.9392.3128-1.0488.5449zm-.0391 8.461c.3944.5926.324 1.3306-.1563 1.6503-.4799.3197-1.188.0985-1.582-.4941-.3944-.5927-.324-1.3307.1563-1.6504.4727-.315 1.1812-.1086 1.582.4941zM7.207 13.5273c.4803.3197.5506 1.0577.1563 1.6504-.394.5926-1.1038.8138-1.584.4941-.48-.3197-.5503-1.0577-.1563-1.6504.4008-.6021 1.1087-.8106 1.584-.4941z"></path></svg>
          </div>
        </div>
        <div className="z-10 pointer-events-none absolute w-full h-full inset-0 bg-gradient-to-b from-fd-background/0 to-fd-background from-[calc(100%-15rem)]"/>
        <div className="flex lg:flex-row flex-col items-center sm:items-end relative overflow-hidden bg-fd-background/20 p-2 rounded-2xl border backdrop-blur min-w-fd-container">
          <div className="absolute top-0 right-0 -z-10 translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-fd-primary/20 blur-3xl max-md:hidden" />
          <div className="absolute top-0 right-0 -z-10 h-full w-[32rem] bg-grid-lines-lg -skew-20 -translate-y-1/2 translate-x-1/2 max-md:hidden"/>
          {/* import { Icon } from '@roninoss/icons';
          import { Link } from 'expo-router';
          import { Platform, View, type ViewStyle } from 'react-native';
          import { SafeAreaView } from 'react-native-safe-area-context';
          
          import { Button } from '~/components/nativewindui/Button';
          import { Text } from '~/components/nativewindui/Text';
          import { useColorScheme } from '~/lib/useColorScheme';
          
          const ROOT_STYLE: ViewStyle = { flex: 1 }; */}
          <pre className="font-mono w-full max-w-[calc(100vw-1rem)] min-h-96 relative text-start max-h-full p-4 overflow-hidden text-xs bg-fd-background/40 text-fd-foreground/50 backdrop-blur rounded-xl border [mask-image:linear-gradient(to_bottom,red_calc(100%-15rem),transparent)] sm:[mask-image:none]">{`...
  export default function WelcomeConsentScreen() {
    const { colors } = useColorScheme();
    return (
      <SafeAreaView style={ROOT_STYLE}>
        <View className="mx-auto max-w-sm flex-1 justify-between gap-4 px-8 py-4 ">
          <View className="ios:pt-8 pt-12">
            <Text variant="largeTitle" className="ios:text-left ios:font-black text-center font-bold">
              Welcome to your
            </Text>
            <Text
              variant="largeTitle"
              className="ios:text-left ios:font-black text-primary text-center font-bold">
              Application
            </Text>
          </View>
          <View className="gap-8">
            {FEATURES.map((feature) => (
              <View key={feature.title} className="flex-row gap-4">
                <View className="pt-px">
                  <Icon
                    name={feature.icon}
                    size={38}
                    color={colors.primary}
                    ios={{ renderingMode: 'hierarchical' }}
                  />
                </View>
                <View className="flex-1">
                  <Text className="font-bold">{feature.title}</Text>
                  <Text variant="footnote">{feature.description}</Text>
                </View>
              </View>
            ))}
          </View>
          <View className="gap-4">
            <View className="items-center">
              <Icon
                name="account-multiple"
                size={24}
                color={colors.primary}
                ios={{ renderingMode: 'hierarchical' }}
              />
              <Text variant="caption2" className="pt-1 text-center">
                By pressing continue, you agree to our{' '}
                <Link href="/">
                  <Text variant="caption2" className="text-primary">
                    Terms of Service
                  </Text>
                </Link>{' '}
                and that you have read our{' '}
                <Link href="/">
                  <Text variant="caption2" className="text-primary">
                    Privacy Policy
                  </Text>
                </Link>
              </Text>
            </View>
            <Link href="../" replace asChild>
              <Button size={Platform.select({ ios: 'lg', default: 'md' })}>
                <Text>Continue</Text>
              </Button>
            </Link>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  const FEATURES = [
    {
      title: 'Profile Management',
      description: 'Easily update and manage your personal information, settings, and preferences',
      icon: 'account-circle-outline',
    },
    {
      title: 'Secure Messaging',
      description: 'Chat securely with friends and family in real-time.',
      icon: 'message-processing',
    },
    {
      title: 'Activity Tracking',
      description: 'Monitor your daily activities and track your progress over time.',
      icon: 'chart-timeline-variant',
    },
  ] as const;
  `}
        </pre>
        <div className="h-full relative min-h-96 overflow-clip sm:absolute sm:-right-20 sm:translate-y-1/2 lg:translate-y-0 md:right-0 w-96 min-w-96 rounded-t-[3rem] mx-4 mt-4 -mb-4 border-2 border-black lg:relative bg-gradient-to-b from-fd-accent/20 backdrop-blur to-white dark:to-fd-card p-8 pt-24 text-start -translate-y-1/3">
          <div className="w-24 h-8 rounded-full bg-black absolute top-4 left-1/2 -translate-x-1/2" />
            <h1 className="text-4xl font-black mb-20">
              Welcome to your<br/>
              <span className="text-fd-primary">Application</span>
            </h1>
            <div className="flex flex-col gap-8 h-full">
              <div className="flex gap-4">
                <div className="w-10">
                  <CircleUser size={32} className="text-fd-primary" />
                </div>
                <div className="flex w-full flex-col">
                  <h2 className="text-lg font-bold -mt-1.5">Profile Management</h2>
                  <p className="text-sm text-fd-muted-foreground">
                    Easily update and manage your personal information, settings, and preferences
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10">
                  <MessageCircleMore size={32} className="text-fd-primary" />
                </div>
                <div className="flex w-full flex-col">
                  <h2 className="text-lg font-bold -mt-1.5">Secure Messaging</h2>
                  <p className="text-sm text-fd-muted-foreground">
                    Chat securely with friends and family in real-time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}